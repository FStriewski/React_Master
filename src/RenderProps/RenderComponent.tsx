import * as React from 'react';

type Props = {
  count: number;
  name: string;
}

// This component provides something to render and can also receive props.
export const RenderComponent = ({count, name}: Props) => <div>I am just rendering something! My Count {count} for {name}</div>;
