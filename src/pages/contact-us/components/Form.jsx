import { Card, Input, Button, Textarea } from "@material-tailwind/react";
import React from "react";

const Form = () => {
  return (
    <div className="  w-[90%] sm:w-full h-[400px] md:h-[530px] lg:max-w-[550px]">
    <Card color="transparent" shadow={false}>
      <form className="w-80 ">
        <div className="mb-1 flex flex-col gap-4">
          <Input size="lg" label="Name" />

          <Input size="lg" label="Email" />

          <Textarea label="Message" size="lg" />
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
