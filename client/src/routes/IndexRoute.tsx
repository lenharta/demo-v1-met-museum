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

export function TestComponentModal() {
  return (
    <Modal
      content={
        <>
          <h3>Example Modal</h3>
          <p>Example Modal Message.</p>
        </>
      }
    />
  );
}

function TestComponentSingleCheckbox() {
  const [acceptTerms, acceptTermsSet] = useState<boolean>(false);
  const tos = "By checking this box, you are agreeing to our terms of service.";
  const tosOptions = { text: tos, value: acceptTerms };

  return (
    <Checkbox
      option={tosOptions}
      onChange={() => acceptTermsSet(!acceptTerms)}
    />
  );
}

function TestComponentDisplay() {
  return (
    <>
      <TestComponentModal />
      <TestComponentRadioGroup />
      <TestComponentSingleCheckbox />
    </>
  );
}

export default function IndexRoute() {
  return (
    <Page hero={<PageHero title="Home" />}>
      <h3>Page Content</h3>
      <TestComponentModal />
    </Page>
  );
}
