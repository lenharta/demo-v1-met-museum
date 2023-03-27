import { useState } from "react";
import { Checkbox, Modal, Page, PageHero, RadioGroup } from "../components";
import { TestComponentRadioGroup } from "../components/common/input-groups/RadioGroup";
import { clxss } from "../utils";

type TestTheme = "light-mode" | "dark-mode";
type FontSize = 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 52 | 96;
type FontWeight =
  | "p-bold"
  | "p-medium"
  | "p-regular"
  | "p-semibold"
  | "s-bold"
  | "s-light"
  | "s-black"
  | "s-medium"
  | "s-regular";

type TextProps = {
  size?: FontSize;
  weight?: FontWeight;
  value: React.ReactNode;
};

export function Text({ size, weight, value }: TextProps) {
  const modifiers = [`line${size ?? 16}`, weight ?? "p-regular"];
  const classList = clxss("text", modifiers);
  return <p className={classList}>{value}</p>;
}

export function IndexHero() {
  return (
    <div className="hero IndexHero">
      <h1 className="line96 p-bold">Home</h1>
      <Text size={18} value="Example hero subtitle line." />
    </div>
  );
}

export default function IndexRoute() {
  const [acceptTerms, acceptTermsSet] = useState<boolean>(false);
  const tos = "By checking this box, you are agreeing to our terms of service.";

  return (
    <Page hero={<PageHero title="Home" />}>
      <TestComponentRadioGroup />

      <Checkbox
        option={{
          text: tos,
          value: acceptTerms,
        }}
        onChange={() => acceptTermsSet(!acceptTerms)}
      />

      <Modal
        config={{
          title: "Alert",
          text: "Press 'ESC' -or- 'click' the icon above to close this Modal.",
        }}
      />

      {/* <CheckboxGroup
        value={theme}
        onChange={() => onModeUpdate(theme)}
        options={[
          { value: "light-mode", text: "Light Mode" },
          { value: "dark-mode", text: "Dark Mode" },
        ]}
      />


      {/* <ModalPortal /> */}
      {/* <ModalNoPortal /> */}
    </Page>
  );
}
