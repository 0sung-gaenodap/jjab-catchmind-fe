import { useMemo, useState } from "react";
import "../index.css";

export default function MainPage({ onGoHome }) {
  const [tab, setTab] = useState("전체");

  const rooms = useMemo(
    () => [
      { title: "재밌는 방", type: "공개", players: "4/8", time: "60초", host: "김철수" },
      { title: "고수만", type: "공개", players: "6/8", time: "90초", host: "이영희" },
      { title: "초보 환영", type: "공개", players: "2/6", time: "60초", host: "박민수" },
      { title: "비밀방", type: "비공개", players: "3/4", time: "45초", host: "정다은" },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (tab === "전체") return rooms;
    if (tab === "공개방") return rooms.filter((r) => r.type === "공개");
    return rooms.filter((r) => r.type === "비공개");
  }, [rooms, tab]);

  return (
    <div className="mainPage">
      <div className="content">
        {/* 왼쪽 컬럼 */}
        <div className="leftCol">
          <div className="panel">
            <div className="panelTitle">빠른 시작</div>
            <div className="panelSub">바로 게임에 참여하세요</div>

            <button className="gradBtn">⚡ 빠른 매칭</button>
            <button className="outlineBtn">＋ 방 만들기</button>
            <button className="backBtn2" onClick={onGoHome}>
  ← 홈으로
</button>
          </div>

          <div className="panel">
            <div className="panelTitle">게임 가이드</div>

            <div className="guideRow">
              <div className="badge b1">1</div>
              <div className="guideText">출제자는 주어진 단어를 그림으로 표현합니다</div>
            </div>
            <div className="guideRow">
              <div className="badge b2">2</div>
              <div className="guideText">다른 플레이어는 채팅으로 정답을 맞춥니다</div>
            </div>
            <div className="guideRow">
              <div className="badge b3">3</div>
              <div className="guideText">빨리 맞출수록 높은 점수를 획득합니다</div>
            </div>
          </div>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="rightCol">
          <div className="panel big">
            <div className="panelTitle">게임 방 목록</div>
            <div className="panelSub">참여하고 싶은 방을 선택하세요</div>

            <div className="tabs">
              {["전체", "공개방", "비공개방"].map((t) => (
                <button
                  key={t}
                  className={`tab ${tab === t ? "active" : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="roomList">
              {filtered.map((r, i) => (
                <div key={i} className="roomItem">
                  <div className="roomLeft">
                    <div className="roomTitle">
                      {r.title}{" "}
                      <span className={`pill ${r.type === "공개" ? "pub" : "pri"}`}>{r.type}</span>
                    </div>
                    <div className="roomMeta">
                      <span>👤 {r.players}</span>
                      <span>🕒 {r.time}</span>
                      <span>호스트: {r.host}</span>
                    </div>
                  </div>

                  <button className="enterBtn">입장</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="helpBtn">?</button>
    </div>
  );
}
