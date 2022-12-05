export type FormFields = { [key: string]: any };

export type FormLayout<T extends FormFields> = Array<LayoutItem<T>>;

export type LayoutItem<T extends FormFields> =
  | {
      type: "section";
      children: Array<SectionItem<T>>;
    }
  | {
      type: "actions";
      children: Array<ActionItem>;
    };

export type SectionItem<T extends FormFields> =
  | {
      type: "title";
      text: string;
    }
  | {
      type: "fields";
      columns: number;
      gap: number;
      children: Array<FieldItem<keyof T>>;
    };

export type ActionItem = {
  type: "submit" | "reset";
  text: string;
};

export type FieldItem<T extends string | number | symbol> = {
  name: T;
  label: string;
  type: "string" | "password";
};
