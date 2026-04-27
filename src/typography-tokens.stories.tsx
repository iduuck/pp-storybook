import type { Meta, StoryObj } from "@storybook/react";

interface TypographyToken {
  label: string;
  name: string;
  sample: string;
}

const titleTokens: TypographyToken[] = [
  {
    label: "Title / Regular Semibold",
    name: "--text-title-regular-semibold",
    sample: "ProfitPath title example",
  },
  {
    label: "Title / Small Semibold",
    name: "--text-title-small-semibold",
    sample: "ProfitPath title example",
  },
  {
    label: "Title / Small",
    name: "--text-title-small",
    sample: "ProfitPath title example",
  },
  {
    label: "Title / Mini Semibold",
    name: "--text-title-mini-semibold",
    sample: "ProfitPath title example",
  },
  {
    label: "Title / Mini",
    name: "--text-title-mini",
    sample: "ProfitPath title example",
  },
];

const bodyTokens: TypographyToken[] = [
  {
    label: "Body / Micro Medium",
    name: "--text-micro-medium",
    sample: "Portfolio performance +12.4% month over month",
  },
  {
    label: "Body / Mini",
    name: "--text-mini",
    sample: "Portfolio performance +12.4% month over month",
  },
  {
    label: "Body / Mini Medium",
    name: "--text-mini-medium",
    sample: "Portfolio performance +12.4% month over month",
  },
  {
    label: "Body / Small Medium",
    name: "--text-small-medium",
    sample: "Portfolio performance +12.4% month over month",
  },
  {
    label: "Body / Regular Medium",
    name: "--text-regular-medium",
    sample: "Portfolio performance +12.4% month over month",
  },
];

const paragraphTokens: TypographyToken[] = [
  {
    label: "Paragraph / Small",
    name: "--text-paragraph-small",
    sample:
      "ProfitPath helps you monitor portfolio performance, understand risk exposure, and make clearer weekly decisions.",
  },
  {
    label: "Paragraph / Regular",
    name: "--text-paragraph-regular",
    sample:
      "ProfitPath helps you monitor portfolio performance, understand risk exposure, and make clearer weekly decisions.",
  },
];

const TypographyRow = ({ label, name, sample }: TypographyToken) => (
  <div className="grid gap-4 rounded-xl border border-[var(--color-stroke-primary)] bg-[var(--color-bg-primary)] p-4 md:grid-cols-[1fr_auto]">
    <div>
      <p className="mb-2 text-[var(--color-text-secondary)] text-xs">{label}</p>
      <p
        className="text-[var(--color-text-primary)]"
        style={{
          fontFeatureSettings: "'ss03', 'lnum', 'tnum'",
          fontSize: `var(${name})`,
          fontWeight: `var(${name}--font-weight)`,
          letterSpacing: `var(${name}--letter-spacing)`,
          lineHeight: `var(${name}--line-height)`,
        }}
      >
        {sample}
      </p>
    </div>

    <div className="rounded-lg border border-[var(--color-stroke-secondary)] bg-[var(--color-bg-secondary)] p-3 text-[10px] text-[var(--color-text-secondary)]">
      <p className="font-mono">{name}</p>
      <p className="font-mono">{name}--line-height</p>
      <p className="font-mono">{name}--font-weight</p>
      <p className="font-mono">{name}--letter-spacing</p>
    </div>
  </div>
);

const meta = {
  parameters: {
    layout: "fullscreen",
  },
  title: "Design System/Typography Tokens",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyScale: Story = {
  render: () => {
    return (
      <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 text-[var(--color-text-primary)] md:p-10">
        <div className="mx-auto max-w-5xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-2xl text-[var(--color-text-primary)]">
              Typography Tokens
            </h1>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Title and body declarations from `src/tokens.css` rendered with
              their tokenized size, line-height, weight, and letter-spacing
              values.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[var(--color-text-primary)] text-xl">Title</h2>
            <div className="space-y-3">
              {titleTokens.map((token) => (
                <TypographyRow key={token.name} {...token} />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[var(--color-text-primary)] text-xl">Body</h2>
            <div className="space-y-3">
              {bodyTokens.map((token) => (
                <TypographyRow key={token.name} {...token} />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[var(--color-text-primary)] text-xl">
              Paragraph
            </h2>
            <div className="space-y-3">
              {paragraphTokens.map((token) => (
                <TypographyRow key={token.name} {...token} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  },
};
