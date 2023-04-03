import { useState } from "react";

const TabSelect = <T extends string>({ tabs }: { tabs: T[] }) => {
  const [activeIndex, activeIndexSet] = useState(0);
  // console.log("ACTIVEINDEX", activeIndex);

  return (
    <section className="TabSelect" aria-multiselectable={false}>
      <ul className="TabSelectList" role="tablist">
        {tabs.map((value, index) => (
          <li key={value + index} className="TabSelectItem" role="presentation">
            <button
              role="tab"
              tabIndex={0}
              aria-setsize={3}
              aria-posinset={1}
              aria-selected="true"
              aria-controls="tab-panel-1"
            >
              <>{value}</>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const TabSelectTestComponent = () => {
  return (
    <>
      <h3>Tab Select Testing</h3>
      <TabSelect tabs={["tab-1", "tab-2", "tab-3", "tab-4"]} />
    </>
  );
};

export default TabSelect;
