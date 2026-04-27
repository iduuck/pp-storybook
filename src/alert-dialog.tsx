import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { tv } from "./utils/tv";

const alertDialogStyles = tv({
  slots: {
    backdrop:
      "fixed inset-0 bg-black/20 transition-opacity duration-200 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
    description:
      "text-g500 text-small [font-feature-settings:'ss03','lnum','tnum']",
    footer: "flex h-6 w-full items-center justify-between",
    popup:
      "w-[400px] max-w-[420px] overflow-hidden rounded-r3 bg-g0 shadow-lg transition-[opacity,transform,scale] duration-200 ease-out data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none",
    positioner: "fixed inset-0 grid place-items-center p-5",
    title:
      "text-g950 text-regular-medium [font-feature-settings:'ss03','lnum','tnum']",
    trigger: "inline-flex",
  },
});

export const AlertDialogRoot = AlertDialogPrimitive.Root;

export interface TriggerProps
  extends Omit<AlertDialogPrimitive.Trigger.Props, "className"> {
  className?: string;
}

const Trigger = ({ className, ...props }: TriggerProps) => {
  const { trigger } = alertDialogStyles();

  return (
    <AlertDialogPrimitive.Trigger
      className={trigger({ className })}
      {...props}
    />
  );
};
export const AlertDialogTrigger = Trigger;

export interface ContentProps
  extends Omit<AlertDialogPrimitive.Popup.Props, "className"> {
  backdropClassName?: string;
  children: ReactNode;
  className?: string;
  positionerClassName?: string;
}

const Content = ({
  backdropClassName,
  children,
  className,
  positionerClassName,
  ...props
}: ContentProps) => {
  const { backdrop, popup, positioner } = alertDialogStyles();

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop
        className={backdrop({ className: backdropClassName })}
      />
      <div className={positioner({ className: positionerClassName })}>
        <AlertDialogPrimitive.Popup className={popup({ className })} {...props}>
          {children}
        </AlertDialogPrimitive.Popup>
      </div>
    </AlertDialogPrimitive.Portal>
  );
};
export const AlertDialogContent = Content;

export interface TitleProps
  extends Omit<AlertDialogPrimitive.Title.Props, "className"> {
  className?: string;
}

const Title = ({ className, ...props }: TitleProps) => {
  const { title } = alertDialogStyles();

  return (
    <AlertDialogPrimitive.Title className={title({ className })} {...props} />
  );
};
export const AlertDialogTitle = Title;

export interface DescriptionProps
  extends AlertDialogPrimitive.Description.Props {
  className?: string;
}

const Description = ({ className, ...props }: DescriptionProps) => {
  const { description } = alertDialogStyles();

  return (
    <AlertDialogPrimitive.Description
      className={description({ className })}
      {...props}
    />
  );
};
export const AlertDialogDescription = Description;

export interface FooterProps extends ComponentPropsWithoutRef<"div"> {}

const Footer = ({ className, ...props }: FooterProps) => {
  const { footer } = alertDialogStyles();

  return <div className={footer({ className })} {...props} />;
};
export const AlertDialogFooter = Footer;

const Close = (props: AlertDialogPrimitive.Close.Props) => {
  return <AlertDialogPrimitive.Close {...props} />;
};
export const AlertDialogClose = Close;
