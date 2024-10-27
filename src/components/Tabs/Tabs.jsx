import { useState } from "react";
import css from "./Tabs.module.css";

const Tabs = ({ children, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || children[0].props.label
  );

  const onClickTab = (label) => {
    setActiveTab(label);
  };

  return (
    <div className={css.container}>
      <div className={css.tabs}>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <button
              key={label}
              className={`tab-list-item ${label === activeTab ? "active" : ""}`}
              onClick={() => onClickTab(label)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
