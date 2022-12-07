import React from "react";
import { Formik, FormikHelpers } from "formik";

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
  initialValues: T;
  validationSchema?: any;
  layout: FormLayout<T>;
  isLoading?: boolean;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
};

const Form = <T extends FormFields>({
  initialValues,
  validationSchema,
  layout,
  isLoading,
  onSubmit,
}: FormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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

        const getAction = (item: ActionItem, index: number) => {
          return (
            <Button
              key={`action-${index}`}
              type={item.type}
              disabled={isLoading}
            >
              {item.text}
            </Button>
          );
        };

        return <form onSubmit={handleSubmit}>{layout.map(getLayout)}</form>;
      }}
    </Formik>
  );
};

export default Form;
