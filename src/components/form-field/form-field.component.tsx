import { HTMLProps, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as Form from "../ui/form";

interface FormFieldProps {
  render: (
    inputProps: HTMLProps<HTMLInputElement & HTMLTextAreaElement>
  ) => ReactElement;
  name: string;
  label: string;
}

export function FormField({ render, name, label }: FormFieldProps) {
  const { t } = useTranslation(["contact"]);
  const inputProps = {
    className:
      "text-primary border-0 focus-visible:ring-0 p-0 h-[19px] text-sm resize-none px-1.5 font-light break-words shadow-none",
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
            <div className="ring-primary/15 rounded-md p-2 relative w-full focus-within:ring-2 has-[[data-error=true]]:ring-destructive-foreground dark:bg-neutral-950/60 bg-soft-gray">
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
