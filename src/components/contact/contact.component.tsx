"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Trans, useTranslation } from "react-i18next";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FormField } from "../form-field/form-field.component";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormEvent,
  FormEventHandler,
  HTMLProps,
  useCallback,
  useReducer,
  useRef,
  useState,
} from "react";
import { cn } from "@/utils";
import i18n from "@/i18n";
import emailjs from "@emailjs/browser";
import LoaderIcon from "@/assets/loader.svg?react";

const SUBJECT_CHARACTERS_LIMIT = 250;
const MESSAGE_CHARACTERS_LIMIT = 2500;

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID } = import.meta.env;

const ContactFormSchema = z
  .object({
    subject: z
      .string()
      .trim()
      .min(3, i18n.t("errors:minLength", { count: 3 }))
      .max(
        SUBJECT_CHARACTERS_LIMIT,
        i18n.t("errors:maxLength", {
          count: SUBJECT_CHARACTERS_LIMIT,
        })
      )
      .optional(),
    email: z
      .string()
      .trim()
      .email(i18n.t("errors:email"))
      .max(320, i18n.t("errors:maxLength", { count: 320 })),
    message: z
      .string()
      .trim()
      .min(3, i18n.t("errors:minLength", { count: 3 }))
      .max(MESSAGE_CHARACTERS_LIMIT, ""),
  })
  .required();

const initialState = {
  remainingCharacters: MESSAGE_CHARACTERS_LIMIT,
  isCharactersLimitExceeded: false,
};

const reducer = (_prevState: typeof initialState, charactersCount: number) => {
  const remainingCharacters = Math.abs(
    MESSAGE_CHARACTERS_LIMIT - charactersCount
  );

  const isCharactersLimitExceeded = charactersCount > MESSAGE_CHARACTERS_LIMIT;

  return {
    remainingCharacters,
    isCharactersLimitExceeded,
  };
};

export function Contact() {
  const { t } = useTranslation(["contact"]);
  const useFormResult = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { subject: "", email: "", message: "" },
  });
  const [
    { remainingCharacters, isCharactersLimitExceeded },
    setCharactersCount,
  ] = useReducer(reducer, initialState);
  const [{ isLoading, isError, isSuccess }, setFetchState] = useState({
    isError: false,
    isSuccess: false,
    isLoading: false,
  });

  const timeout = useRef(-1);
  const onInput: FormEventHandler<HTMLTextAreaElement> = useCallback(
    ({ currentTarget: { value } }) => {
      if (timeout.current !== -1) {
        clearTimeout(timeout.current);
      }

      timeout.current = window.setTimeout(() => {
        setCharactersCount(value.trimStart().replace(/ +(?= )/g, "").length);

        timeout.current = -1;
      }, 200);
    },
    []
  );

  const onSubmit = useCallback(
    (e: FormEvent) =>
      useFormResult.handleSubmit(async (data) => {
        let isError = false;
        setFetchState((prev) => ({ ...prev, isLoading: true }));

        try {
          await emailjs.send(
            VITE_EMAILJS_SERVICE_ID,
            VITE_EMAILJS_TEMPLATE_ID,
            {
              ...data,
              message: data.message.trimStart().replace(/ +(?= )/g, ""),
            }
          );

          useFormResult.reset();
          setCharactersCount(0);
        } catch {
          isError = true;
        } finally {
          setFetchState((prev) => ({
            ...prev,
            isLoading: false,
            isError,
            isSuccess: !isError,
          }));
        }
      })(e),
    [useFormResult]
  );

  return (
    <section className="font-bold text-primary my-12 w-full">
      <h2 className="heading max-w-xl mx-auto mb-6">
        <Trans i18nKey="contact:heading">
          <span className="text-orange">Contact</span> me
        </Trans>
      </h2>
      <Form {...useFormResult}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 max-w-xl mx-auto"
        >
          <p
            aria-live="polite"
            className={cn(
              "text-center text-lg p-4 rounded-md text-white w-fit m-auto mt-4 mb-6",
              {
                "bg-green-500": isSuccess,
                "bg-red-500": isError,
                "sr-only": !isError && !isSuccess,
              }
            )}
          >
            {isError &&
              t(
                "Email can't be sent for now, try again later or message me directly!"
              )}
            {isSuccess && t("Email has been sent! I will reply to it soon.")}
          </p>
          <FormField
            name="subject"
            label="Subject"
            render={(inputProps: HTMLProps<HTMLInputElement>) => (
              <Input {...inputProps} />
            )}
          />
          <FormField
            name="email"
            label="Email"
            description={t(
              "Valid email should look like this - email@example.com"
            )}
            render={(inputProps: HTMLProps<HTMLInputElement>) => (
              <Input {...inputProps} />
            )}
          />
          <div>
            <FormField
              name="message"
              label="Message"
              description={
                <span className="sr-only">
                  {t("messageDescription", {
                    count: MESSAGE_CHARACTERS_LIMIT,
                  })}
                </span>
              }
              render={(inputProps: HTMLProps<HTMLTextAreaElement>) => (
                <Textarea
                  {...inputProps}
                  onInput={onInput}
                  className={cn(
                    inputProps.className,
                    "h-[unset] max-h-76 [word-break:break-word]"
                  )}
                />
              )}
            />
            <span
              className={cn(
                "p-2 bg-background block",
                isCharactersLimitExceeded && "text-destructive-foreground"
              )}
              aria-live="polite"
            >
              {t(
                isCharactersLimitExceeded
                  ? "tooManyCharacters"
                  : "remainingCharacters",
                {
                  count: remainingCharacters,
                }
              )}
            </span>
          </div>
          <Button
            type="submit"
            className="flex font-bold self-end uppercase text-base items-center w-fit border border-orange leading-tight has-[>svg]:px-6 py-1.5 gap-1.5 transition-colors my-1 hover:bg-orange hover:text-neutral-900 rounded-sm cursor-pointer"
            variant="outline"
          >
            <span className="leading-7 pt-[1.5px]">{t("Send")}</span>
            {isLoading && <LoaderIcon aria-hidden className="animate-spin" />}
          </Button>
          <span aria-live="polite" className="sr-only">
            {isLoading && t("Wait, your email is being sent.")}
          </span>
        </form>
      </Form>
    </section>
  );
}
