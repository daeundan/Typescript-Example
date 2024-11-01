import { atom, selector } from "recoil";
// 셀렉터: 아톰에서 관리하는 스테이트값을 편집하거나 변화시키는 역할

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

// 시간 계산을 할 것임 60분에 1시간이니 나누기 60
export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
});
