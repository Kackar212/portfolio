import { HTMLProps, ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import * as Form from "../ui/form";

interface FormFieldProps {
  render: (
    inputProps: HTMLProps<HTMLInputElement & HTMLTextAreaElement>
  ) => ReactElement;
  name: string;
  label: string;
  description?: ReactNode;
}

export function FormField({
  render,
  name,
  label,
  description,
}: FormFieldProps) {
  const { t } = useTranslation(["contact"]);
  const inputProps = {
    className:
      "text-primary h-[19px] rounded-none text-sm resize-none px-1.5 font-light break-words p-2 box-content font-medium",
    name,
  };

  return (
    <Form.FormField
      name={name}
      render={({ field }) => (
        <Form.FormItem>
          <div className="flex flex-col">
            <Form.FormLabel className="px-1.5 my-1 text-sm uppercase leading-none w-[calc(100%-var(--spacing)*4)] data-[error=true]:text-primary font-bold">
              {t(label)}
            </Form.FormLabel>
            <Form.FormDescription className="text-sm px-1.5 mb-0.5 dark:text-gray-400 text-neutral-600">
              {description}
            </Form.FormDescription>
            <div className="relative w-full dark:bg-neutral-950/60 flex border border-ring">
              <Form.FormControl>
                {render({ ...inputProps, ...field })}
              </Form.FormControl>
            </div>
            <Form.FormMessage className="mt-2 px-1.5" />
          </div>
        </Form.FormItem>
      )}
    ></Form.FormField>
  );
}
