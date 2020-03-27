import { SCOPES } from '../../../assets/strings/constants';
import { ACTION_STATE } from '../../../assets/strings/constants';

const TYPE_LOADING = 'LOADING';

const LOADING_START = `${SCOPES.APP}/${TYPE_LOADING}_${ACTION_STATE.START}`;
const LOADING_END = `${SCOPES.APP}/${TYPE_LOADING}_${ACTION_STATE.END}`;

export default {
    LOADING_START,
    LOADING_END
}