import { Button, ButtonProps } from "@nextui-org/react";
import clsx from "clsx";
import { title } from "./primitives";
import { ArrowIcon } from "./icons";

export const NavigateButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      size="lg"
      color="primary"
      className={clsx(
        title({
          size: "sm",
          color: "white",
        }),
        "font-black rounded-none uppercase px-8 py-4 h-16",
      )}
      endContent={<ArrowIcon width={44} height={44} />}
      {...props}
    />
  );
};
