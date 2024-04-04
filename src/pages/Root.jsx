import Button from "../components/ui/Button";
import iconPlus from "../assets/icons/icon-plus.svg";

export default function Root() {
  return (
    <div>
      <Button label="New Invoice">
        <img src={iconPlus} width={10} height={10}></img>
      </Button>
    </div>
  );
}
