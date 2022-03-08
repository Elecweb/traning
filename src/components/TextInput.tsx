<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 735e4cb (feat: login form)
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

<<<<<<< HEAD
const TextInput = ({ input, meta, ...rest }: Props) => (
=======
const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
>>>>>>> 735e4cb (feat: login form)
  <input type="text" {...input} {...rest} />
);

export default TextInput;
