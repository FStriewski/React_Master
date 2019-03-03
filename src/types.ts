
export type State = {
    count: number;
    name: string;
};

export type Props = {
    count: number;
    name: string;
    countUp?: () => void;
};

export type ContextProp = {
    state: State,
    increaseCount: (count: any) => void,
};
