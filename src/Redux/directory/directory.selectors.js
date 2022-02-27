import { createSelector } from "reselect";

const SelectDirectory = state => state.directory;

export const selectSections = createSelector(
    [SelectDirectory],
    directory=> directory.sections
);