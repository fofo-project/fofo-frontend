import { Match, Matching } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

interface MatchProps {
	matchItems: Matching[];
}

export const MatchingCancel: React.FC<MatchProps> = ({
	matchItems,
}: MatchProps) => {
	const [isActive, setActivated] = useState(true);
	const Cancel = async () => {
		if (matchItems.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		const matchIds = (matchItems: Matching[]) => {
			return matchItems
				.map((item: Matching) => item["id"])
				.filter((id) => id !== undefined && id !== null);
		};

		try {
			setActivated(false);
			const result = await getResult(matchIds(matchItems));
			if (result === "SUCCESS") {
				alert(`매칭취소 완료.`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("매칭취소 실패.");
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "매칭취소",
		btnFunction: Cancel,
	};
	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
