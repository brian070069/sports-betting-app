export const initialState = {
  games: [],
  totalOdds: 0,
  finalPayOut: 0,
  betAmount: 150,
  choosenGamesList: [],
};

export const HOMEACTIONS = {
  UPDATECHOOSENGAMES: "UPDATECHOOSENGAMES",
  UPDATEGAMES: "UPDATEGAMES",
  UPDATEPAYOUTS: "UPDATEPAYOUTS",
  CHANGEBETAMOUNT: "CHANGEBETAMOUNT",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case HOMEACTIONS.UPDATECHOOSENGAMES:
      return {
        ...state,
        choosenGamesList: action.payload,
      };

    case HOMEACTIONS.UPDATEGAMES:
      return {
        ...state,
        games: action.games,
      };
    case HOMEACTIONS.UPDATEPAYOUTS:
      const updateTotalOdds = Math.ceil(
        (state.totalOdds + action.newOdds) * 0.7
      );
      const updateFinalPayOuts = Math.floor(state.totalOdds * +state.betAmount);

      return {
        ...state,
        totalOdds: updateTotalOdds,
        finalPayOut: updateFinalPayOuts,
      };
    case HOMEACTIONS.CHANGEBETAMOUNT:
      const updateFinalPayOut = Math.floor(state.totalOdds * +state.betAmount);
      return {
        ...state,
        betAmount: action.betAmount,
        finalPayOut: updateFinalPayOut,
      };
    default:
      return {
        games: [],
        totalOdds: 0,
        finalPayOut: 0,
        betAmount: 150,
        choosenGamesList: [],
      };
  }
};
