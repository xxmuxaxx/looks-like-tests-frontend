import { Formik, FormikConfig } from "formik";

import { Button, SectionTitle } from "components/shared";
import FormGrid from "../FormGrid/FormGrid";
import FormSection from "../FormSection/FormSection";
import FormActions from "../FormActions/FormActions";
import FormField from "../FormField/FormField";
import type {
  ActionItem,
  FieldItem,
  FormFields,
  FormLayout,
  LayoutItem,
  SectionItem,
} from "./Form.types";

import "./Form.scss";

type FormProps<T extends FormFields> = {
  layout: FormLayout<T>;
  isLoading?: boolean;
} & FormikConfig<T>;

const Form = <T extends FormFields>({
  layout,
  isLoading,
  ...restProps
}: FormProps<T>) => (
  <Formik {...restProps}>
    {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      setFieldValue,
      resetForm,
    }) => {
      const getLayout = (item: LayoutItem<T>, index: number) => {
        if (item.type === "section") {
          return (
            <FormSection key={`section-${index}`}>
              {item.children.map(getSection)}
            </FormSection>
          );
        }

        return (
          <FormActions key={`actions-${index}`}>
            {item.children.map(getAction)}
          </FormActions>
        );
      };

      const getSection = (item: SectionItem<T>, index: number) => {
        if (item.type === "title") {
          return (
            <SectionTitle key={`title-${index}-${item.text}`}>
              {item.text}
            </SectionTitle>
          );
        }

        return (
          <FormGrid
            key={`grid-${index}`}
            id={`grid-${index}`}
            columns={item.columns}
            gap={item.gap}
            items={item.children.map(getField)}
          />
        );
      };

      const getField = (item: FieldItem<keyof T>, index: number) => {
        const { name, label, type } = item;

        return (
          <FormField
            key={`field-${index}-${name as string}`}
            label={label}
            type={type}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values[name]}
            name={name as string}
            error={Boolean(touched[name]) && Boolean(errors[name])}
          />
        );
      };

      const getAction = ({ type, text }: ActionItem, index: number) => {
        const key = `action-${index}`;

        switch (type) {
          case "submit":
            return (
              <Button key={key} type={type} disabled={isLoading}>
                {text}
              </Button>
            );

          case "reset":
            return (
              <Button
                key={key}
                modifiers={["auto-width", "second"]}
                type={type}
                disabled={isLoading}
                onClick={() => resetForm()}
              >
                {text}
              </Button>
            );

          default:
            return null;
        }
      };

      return (
        <form className="form" onSubmit={handleSubmit}>
          {layout.map(getLayout)}
        </form>
      );
    }}
  </Formik>
);

export default Form;
