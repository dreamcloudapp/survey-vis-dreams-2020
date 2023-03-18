import { useMemo, useState } from "react";
import "./App.css";
import {
  DreamSnippedWithTheme,
  DreamTheme,
  dummyData,
} from "./data/dummy-data";

type AppProps = {
  data?: DreamTheme[];
  darkMode?: boolean;
};

function App({ data, darkMode }: AppProps) {
  const dataToUse = data || dummyData;
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<"M" | "F" | null>(null);

  const dataKeyByTheme = useMemo(() => {
    return dataToUse.reduce((acc, theme) => {
      acc[theme.theme] = theme;
      return acc;
    }, {} as Record<string, DreamTheme>);
  }, [dataToUse]);

  const dreamSnippetsWithThemes: DreamSnippedWithTheme[] = useMemo(() => {
    return (
      dataToUse.flatMap((theme) => {
        return theme.dreams.map((dream) => {
          return {
            ...dream,
            theme: theme.theme,
          };
        });
      }) || []
    );
  }, [dataToUse]);

  const filteredDreamSnippetsWithThemes = useMemo(() => {
    if (!selectedTheme && !selectedGender) {
      return dreamSnippetsWithThemes;
    } else {
      return dreamSnippetsWithThemes.filter((x) => {
        return (
          x.theme === selectedTheme &&
          (x.gender === selectedGender || !selectedGender)
        );
      });
    }
  }, [selectedTheme, selectedGender, dreamSnippetsWithThemes]);

  const selectedThemeFull = useMemo(() => {
    return dataToUse.find((x) => x.theme === selectedTheme);
  }, [selectedTheme, dataToUse]);

  const themeNames = dataToUse.map((theme) => theme.theme);

  return (
    <div className="App" style={{ width: "100%", paddingTop: 100 }}>
      <div className="App__header">
        {themeNames.map((themeName, i) => {
          return (
            <ButtonCircleWithTwoClickableHalves
              key={i}
              themeName={themeName}
              leftText="M"
              rightText="F"
              onClickLeft={() => {
                setSelectedTheme(themeName);
                setSelectedGender("M");
              }}
              onClickRight={() => {
                setSelectedTheme(themeName);
                setSelectedGender("F");
              }}
              onClickLabel={() => {
                setSelectedTheme(themeName);
                setSelectedGender(null);
              }}
              leftDisabled={
                !dataKeyByTheme[themeName].dreams.find((x) => {
                  return x.gender === "M";
                })
              }
              rightDisabled={
                !dataKeyByTheme[themeName].dreams.find((x) => {
                  return x.gender === "F";
                })
              }
            />
          );
        })}
      </div>
      <div className="App__reset-button-container">
        <ResetButton
          onClick={() => {
            setSelectedTheme(null);
            setSelectedGender(null);
          }}
        />
      </div>

      <div className="App__selected-theme">
        <h3 className="App__selected-theme__name">
          <span>{selectedTheme || "Dream Snippets"}</span>
          {selectedGender && (
            <span style={{ marginLeft: 10 }}>
              {selectedGender === "M" ? "(Male dreams)" : "(Female dreams)"}
            </span>
          )}
        </h3>
        {selectedThemeFull?.intro && (
          <p className="App__selected-theme__intro">
            {selectedThemeFull.intro}
          </p>
        )}
      </div>

      <ul className="App__dream-snippets">
        {filteredDreamSnippetsWithThemes.map((dreamSnippetWithTheme, i) => {
          return (
            <li key={i} className="App__dream-snippet">
              <div className="App__dream-snippet__text">
                {dreamSnippetWithTheme.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type ButtonCircleWithTwoClickableHalvesProps = {
  themeName: string;
  leftText: string;
  rightText: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickLabel?: () => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
};

const semiCircleStyle = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "35px",
  width: "70px",
  borderRadius: "150px 150px 0 0",
  border: "none",
  marginBottom: 50,
};

function ButtonCircleWithTwoClickableHalves({
  leftText,
  rightText,
  onClickLeft,
  onClickRight,
  onClickLabel,
  themeName,
  leftDisabled,
  rightDisabled,
}: ButtonCircleWithTwoClickableHalvesProps) {
  return (
    <div className="button-circle-with-two-clickable-halves__container">
      <div className="button-circle-with-two-clickable-halves">
        <button
          className="button-circle-with-two-clickable-halves__left-half"
          onClick={() => {
            !leftDisabled && onClickLeft();
          }}
          style={{
            ...semiCircleStyle,
            backgroundColor: leftDisabled ? "grey" : "hsl(0, 80%, 60%)",
            transform: "translate(25%) rotate(270deg)",
            cursor: leftDisabled ? "not-allowed" : "pointer",
          }}
        >
          <div className="button-circle-with-two-clickable-halves__left-half__inner">
            <div className="button-circle-with-two-clickable-halves__left-half__inner__text">
              <span>{leftText}</span>
            </div>
          </div>
        </button>
        <button
          className="button-circle-with-two-clickable-halves__right-half"
          onClick={() => {
            !rightDisabled && onClickRight();
          }}
          style={{
            ...semiCircleStyle,
            backgroundColor: rightDisabled ? "grey" : "hsl(240, 80%, 60%)",
            transform: "translate(-25%) rotate(90deg)",
            cursor: rightDisabled ? "not-allowed" : "pointer",
          }}
        >
          <div className="button-circle-with-two-clickable-halves__right-half__inner">
            <div className="button-circle-with-two-clickable-halves__right-half__inner__text">
              <span>{rightText}</span>
            </div>
          </div>
        </button>
      </div>
      <span
        className="button-circle-with-two-clickable-halves__label"
        onClick={onClickLabel}
      >
        {themeName}
      </span>
    </div>
  );
}

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <button
      className="reset-button"
      onClick={() => {
        onClick();
      }}
    >
      <RotateRightIcon width={20} height={20} />
    </button>
  );
};

const RotateRightIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S445.9 48.1 439 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2S318.3 224 328 224h119.5z" />
  </svg>
);

export default App;
