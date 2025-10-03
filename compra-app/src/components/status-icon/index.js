import { CheckCircleIcon, CircleDashedIcon } from "phosphor-react-native";
import { FilterStatus } from "../../types/filter-status";

export function StatusIcon({ status }) {
    return status === FilterStatus.DONE ? (
        <CheckCircleIcon size={18} />
    ) : (
        <CircleDashedIcon size={18} />
    );
}
