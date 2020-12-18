import { CamelCase } from "type-fest";

type DefinitionToImplementionType<T, R> = {
  [K in keyof NonNullable<T> as `${CamelCase<string & K>}`]: (
    args: NonNullable<NonNullable<T>[NonNullable<K>]>
  ) => R;
};

class Scope<T> {
  protected props: T;

  constructor() {
    this.props = {};
  }

  toDefinition(): T {
    return this.props;
  }

  toYAML(): string {
    return jsYAML.dump(this.props);
  }

  toJSON(): JSON {
    const jsonString = JSON.stringify(this.props);
    return JSON.parse(jsonString);
  }
}
