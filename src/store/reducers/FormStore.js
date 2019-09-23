const initialState = {}

export default (state = initialState, action) => {
  var copy;
  switch (action.type) {
    case 'setFormData':
      return action.payload;
    case 'setAPIFormData':
      copy = JSON.parse(JSON.stringify(state));
      copy.levels[0].sections[0].fields[1].list = action.payload.origins;
      copy.levels[1].sections[0].fields[1].list = action.payload.categories;
      copy.levels[1].sections[0].fields[3].list = action.payload.unitMeasures;
      copy.levels[1].sections[0].fields[4].list = action.payload.ingredients;
      const lev2SectionLength = copy.levels[1].sections.length - 2;
      copy.levels[1].sections[lev2SectionLength].fields[5].list = action.payload.passages;
      return copy;
    case 'updateLevels':
      copy = JSON.parse(JSON.stringify(state));
      copy.levels = action.payload;
      return copy;
    case 'levelByArg':
      copy = JSON.parse(JSON.stringify(state));
      copy.currLevel = action.payload;
      return copy;
    case 'levelUp':
      copy = JSON.parse(JSON.stringify(state));
      copy.currLevel++;
      return copy;
    case 'levelDown':
      copy = JSON.parse(JSON.stringify(state));
      copy.currLevel--;
      return copy;
    default:
      return state;
  }
}