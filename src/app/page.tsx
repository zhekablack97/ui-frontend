import { Button } from "@/components/Button";
import style from "../styles/components/ContentPage.module.scss";
import classNames from "classnames";

const size = ["xl",  "md", "sm" ];
const color = ["primary", "secondary", "tertiary", "outline"];
const state = ["default", "disabled", ]; //"hover" "loading"

//components
export default function Home() {
  return (
    <main className="">
      <div className="wrapper p-4 mb-4">
        <h1>Button</h1>

        <div className="mb-4">
          <p>Компонент Button представляет собой элемент кнопки</p>
        </div>

        <div className={classNames(style.demo, "p-4", "border", "rounded", "mb-4")}>
          <table className="mb-4">
            {color.map((blockColor) => {
              return size.map((size) => {
                return (
                  <tr key={blockColor + "-" + size}>
                    {state.map((state) => {
                      return (
                        <td key={blockColor + "-" + size + "-" + state}>
                          <div className={style.elementWrapper}>
                            <Button
                              color={blockColor}
                              size={size}
                              state={state}
                            >
                              Button
                            </Button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              });
            })}
          </table>
        </div>
        <div className={classNames(style.codeBlock, "mb-4")}>
          <Button className={classNames("mb-4")}>Button</Button>
          <div className="p-2 rounded-sm border mb-4 bg-slate-50">
            <code className="text-[14px] ">
              &#x3C;Button&#x3E;Button&#x3C;/Button&#x3E;
            </code>
          </div>
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="sm">1</option>
            <option value="md">1</option>
            <option value="lg">1</option>
          </select>
          Блок настройки от пропсов
        </div>
        <div>Пример кода</div>
        <div>Все свойства</div>
      </div>
    </main>
  );
}
