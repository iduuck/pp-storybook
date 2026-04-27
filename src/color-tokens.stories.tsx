import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Color Tokens",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div className="flex items-center gap-3 p-2">
    <div
      className="h-12 w-12 rounded-md border border-[var(--color-stroke-primary)] shadow-sm"
      style={{ backgroundColor: `var(${value})` }}
    />
    <div className="flex flex-col">
      <span className="font-mono text-[var(--color-text-primary)] text-sm">
        {value}
      </span>
      <span className="text-[var(--color-text-secondary)] text-xs">{name}</span>
    </div>
  </div>
);

const ColorSection = ({
  title,
  colors,
}: {
  title: string;
  colors: { name: string; value: string }[];
}) => (
  <div className="mb-8">
    <h3 className="mb-4 font-semibold text-[var(--color-text-primary)] text-lg">
      {title}
    </h3>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {colors.map((color) => (
        <ColorSwatch key={color.value} name={color.name} value={color.value} />
      ))}
    </div>
  </div>
);

export const AllTokens: Story = {
  render: () => {
    const grayColors = [
      { name: "Gray 0000", value: "--color-g0000" },
      { name: "Gray 0", value: "--color-g0" },
      { name: "Gray 50", value: "--color-g50" },
      { name: "Gray 100", value: "--color-g100" },
      { name: "Gray 200", value: "--color-g200" },
      { name: "Gray 300", value: "--color-g300" },
      { name: "Gray 400", value: "--color-g400" },
      { name: "Gray 500", value: "--color-g500" },
      { name: "Gray 600", value: "--color-g600" },
      { name: "Gray 700", value: "--color-g700" },
      { name: "Gray 800", value: "--color-g800" },
      { name: "Gray 900", value: "--color-g900" },
      { name: "Gray 950", value: "--color-g950" },
      { name: "Gray 1000", value: "--color-g1000" },
    ];

    const semanticColors = [
      { name: "Background Primary", value: "--color-bg-primary" },
      { name: "Background Secondary", value: "--color-bg-secondary" },
      { name: "Stroke Primary", value: "--color-stroke-primary" },
      { name: "Stroke Secondary", value: "--color-stroke-secondary" },
      { name: "Text Primary", value: "--color-text-primary" },
      { name: "Text Secondary", value: "--color-text-secondary" },
      { name: "Text Tertiary", value: "--color-text-tertiary" },
    ];

    const blueColors = [
      { name: "Blue 50", value: "--color-b50" },
      { name: "Blue 100", value: "--color-b100" },
      { name: "Blue 200", value: "--color-b200" },
      { name: "Blue 300", value: "--color-b300" },
      { name: "Blue 400", value: "--color-b400" },
      { name: "Blue 500", value: "--color-b500" },
      { name: "Blue 600", value: "--color-b600" },
      { name: "Blue 700", value: "--color-b700" },
      { name: "Blue 800", value: "--color-b800" },
      { name: "Blue 900", value: "--color-b900" },
      { name: "Blue 950", value: "--color-b950" },
    ];

    const dangerColors = [
      { name: "Danger 50", value: "--color-d50" },
      { name: "Danger 100", value: "--color-d100" },
      { name: "Danger 200", value: "--color-d200" },
      { name: "Danger 300", value: "--color-d300" },
      { name: "Danger 400", value: "--color-d400" },
      { name: "Danger 500", value: "--color-d500" },
      { name: "Danger 600", value: "--color-d600" },
      { name: "Danger 700", value: "--color-d700" },
      { name: "Danger 800", value: "--color-d800" },
      { name: "Danger 900", value: "--color-d900" },
      { name: "Danger 950", value: "--color-d950" },
    ];

    const warningColors = [
      { name: "Warning 50", value: "--color-w50" },
      { name: "Warning 100", value: "--color-w100" },
      { name: "Warning 200", value: "--color-w200" },
      { name: "Warning 300", value: "--color-w300" },
      { name: "Warning 400", value: "--color-w400" },
      { name: "Warning 500", value: "--color-w500" },
      { name: "Warning 600", value: "--color-w600" },
      { name: "Warning 700", value: "--color-w700" },
      { name: "Warning 800", value: "--color-w800" },
      { name: "Warning 900", value: "--color-w900" },
      { name: "Warning 950", value: "--color-w950" },
    ];

    const yellowColors = [
      { name: "Yellow 50", value: "--color-y50" },
      { name: "Yellow 100", value: "--color-y100" },
      { name: "Yellow 200", value: "--color-y200" },
      { name: "Yellow 300", value: "--color-y300" },
      { name: "Yellow 400", value: "--color-y400" },
      { name: "Yellow 500", value: "--color-y500" },
      { name: "Yellow 600", value: "--color-y600" },
      { name: "Yellow 700", value: "--color-y700" },
      { name: "Yellow 800", value: "--color-y800" },
      { name: "Yellow 900", value: "--color-y900" },
      { name: "Yellow 950", value: "--color-y950" },
    ];

    const successColors = [
      { name: "Success 50", value: "--color-p50" },
      { name: "Success 100", value: "--color-p100" },
      { name: "Success 200", value: "--color-p200" },
      { name: "Success 300", value: "--color-p300" },
      { name: "Success 400", value: "--color-p400" },
      { name: "Success 500", value: "--color-p500" },
      { name: "Success 600", value: "--color-p600" },
      { name: "Success 700", value: "--color-p700" },
      { name: "Success 800", value: "--color-p800" },
      { name: "Success 900", value: "--color-p900" },
      { name: "Success 950", value: "--color-p950" },
    ];

    const accentColors = [
      { name: "Accent 50", value: "--color-a50" },
      { name: "Accent 100", value: "--color-a100" },
      { name: "Accent 200", value: "--color-a200" },
      { name: "Accent 300", value: "--color-a300" },
      { name: "Accent 400", value: "--color-a400" },
      { name: "Accent 500", value: "--color-a500" },
      { name: "Accent 600", value: "--color-a600" },
      { name: "Accent 700", value: "--color-a700" },
      { name: "Accent 800", value: "--color-a800" },
      { name: "Accent 900", value: "--color-a900" },
      { name: "Accent 950", value: "--color-a950" },
    ];

    const swapColors = [
      { name: "Black Swap", value: "--color-black-swap" },
      { name: "Light Swap", value: "--color-light-swap" },
    ];

    return (
      <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
        <h1 className="mb-8 font-bold text-3xl text-[var(--color-text-primary)]">
          Design System Color Tokens
        </h1>

        <ColorSection colors={semanticColors} title="Semantic Colors" />
        <ColorSection colors={grayColors} title="Gray Scale" />
        <ColorSection colors={blueColors} title="Blue" />
        <ColorSection colors={dangerColors} title="Danger / Red" />
        <ColorSection colors={warningColors} title="Warning / Orange" />
        <ColorSection colors={yellowColors} title="Yellow" />
        <ColorSection colors={successColors} title="Success / Green" />
        <ColorSection colors={accentColors} title="Accent / Purple" />
        <ColorSection colors={swapColors} title="Swap Colors" />
      </div>
    );
  },
};
