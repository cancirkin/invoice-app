//HOOKS
import useScreenSize from "../hooks/useScreenSize";
//COMPONENTS
import Button from "../components/ui/Button";
import iconPlus from "../assets/icons/icon-plus.svg";
import iconArrowDown from "../assets/icons/icon-arrow-down.svg";
import Input from "../components/form/Input";
import Dropdown from "../components/form/Dropdown";
import DatePicker from "../components/form/DatePicker";

export default function Root() {
  const screenSize = useScreenSize();

  return (
    <div>
      {/* <Button type="dark" label="New Invoice">
        <img src={iconPlus} width={10} height={10}></img>
      </Button>

      <Input />

      <Dropdown
        options={[
          { value: "12", label: "Test" },
          { value: "13", label: "Test - 2" },
        ]}
      /> */}
      {/* <DatePicker /> */}
      <div className="header">
        <div className="header__title">
          <h1 className="heading-l">Invoices</h1>
          <p>
            {screenSize.width < 768
              ? "7 invoices"
              : "There are 7 total invoices"}
          </p>
        </div>
        <div className="header__actions">
          <div className="header__actions__filter">
            <span>
              {screenSize.width < 768 ? "Filter" : "Filter by status"}
            </span>
            <img src={iconArrowDown} alt="" />
          </div>
          <div className="header__actions__new">
            <Button label={screenSize.width < 768 ? "New" : "New Invoice"}>
              <img src={iconPlus} width={10} height={10}></img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
