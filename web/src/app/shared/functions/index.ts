interface IChooseObject {
  index: number;
}

export type TChooseGroupState<T> = [
  T[],
  React.Dispatch<React.SetStateAction<T[]>>
];

interface IChooseGroupStateToUpdate<T> {
  state: T[];
  setState: React.Dispatch<React.SetStateAction<T[]>>;
}

const delay = (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const onChooseAndTarget = <T extends IChooseObject>(
  activeChooseContainerIndex: number | null,
  listsOfChooseGroupsStates: TChooseGroupState<T>[],
  targetArray: T[],
  setActiveChooseContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >,
  setTargetArray: React.Dispatch<React.SetStateAction<T[]>>
) => {
  if (
    activeChooseContainerIndex === null ||
    activeChooseContainerIndex === undefined
  )
    return;

  const isMovingForSameSelectableChoosesGroup =
    targetArray.findIndex((c) => c.index === activeChooseContainerIndex) !== -1;

  if (isMovingForSameSelectableChoosesGroup) return;

  const chooseGroup = {} as IChooseGroupStateToUpdate<T>;

  for (let i = 0; i < listsOfChooseGroupsStates.length; i++) {
    const chooseGroupState = listsOfChooseGroupsStates[i];

    const index = chooseGroupState[0].findIndex(
      (c) => c.index === activeChooseContainerIndex
    );

    if (index === -1) continue;

    chooseGroup.state = chooseGroupState[0];
    chooseGroup.setState = chooseGroupState[1];

    break;
  }

  // ? Current state with selected choose
  const { state, setState } = chooseGroup;

  const chooseToMove = state.find(
    (c) => c.index === activeChooseContainerIndex
  ) as T;

  setTargetArray([chooseToMove]);

  if (targetArray.length > 0) {
    const chooseReplacedInTargetArea = targetArray[0];

    setState((oldValue) => [
      ...oldValue.filter((c) => c.index !== activeChooseContainerIndex),
      chooseReplacedInTargetArea,
    ]);
  } else {
    setState((oldValue) =>
      oldValue.filter((c) => c.index !== activeChooseContainerIndex)
    );
  }

  setActiveChooseContainerIndex(null);
};

export const Functions = { delay, onChooseAndTarget };
