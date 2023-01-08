import { JSX, ParentComponent } from "solid-js";

interface SelectButtonProps {
  highlight: () => boolean;
  onClick: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent>
}

const SelectButton: ParentComponent<SelectButtonProps> = (props) => {
  const slot = props.children;
  const isHighlight = props.highlight;
  return (
    <div
      flex
      items-center
      justify-center
      h-14
      w-14
      rounded-md
      border
      border-2
      cursor-pointer
      transition-colors
      bg-op-40
      dark:bg-op-40
      hover="bg-violet-200 dark:bg-violet-400 border-violet-400"
      class={
        isHighlight()
          ? "bg-violet-300 dark:bg-violet-400 border-violet-400"
          : "bg-neutral-300 dark:bg-neutral-600 border-transparent"
      }
      onClick={props.onClick}
    >
      {slot}
    </div>
  );
};

export default SelectButton
