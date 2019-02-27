import * as React from 'react';
import { Props } from '../types';


// This component provides something to render and can also receive props.
export const RenderComponent = ({count, name}: Props) => <div>I am just rendering something! My Count {count} for {name}</div>;
