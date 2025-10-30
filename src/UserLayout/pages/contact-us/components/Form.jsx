import { Card, Input, Button, Textarea } from "@material-tailwind/react";
import React from "react";

const Form = () => {
  return (
    <div className="mr-0 ml-0  w-full max-w-[400px] mx-auto">
    <Card color="transparent" shadow={false}>
      <form className="w-full mx-auto">
        <div className="mb-1 flex flex-col gap-4">
          <Input size="lg" label="Name" />

          <Input size="lg" label="Email" />

          <Textarea label="Message" size="xxl" rows={10} />
        </div>

        <Button
          className="mt-4 text-white font-serif bg-blue-900 normal-case text-base font-normal"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default Form;
