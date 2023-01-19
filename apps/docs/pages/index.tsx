import { Button } from "ui";
import style from "ui/components/atoms/button/button.module.css";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button design={style.buttonSecondary} clickHandler={() => alert("TEST")}>
        secondary
      </Button>
    </div>
  );
}
