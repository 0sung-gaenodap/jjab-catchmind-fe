import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.css";

export default function MainPage() {
  const [tab, setTab] = useState("전체");
  const navigate = useNavigate();

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
    <div className="mpPage">
      <div className="mpContent">
        <aside className="mpLeftCol">
          <section className="mpPanel">
            <div className="mpPanelTitle">빠른 시작</div>
            <div className="mpPanelSub">바로 게임에 참여하세요</div>

            <button className="mpGradBtn">⚡ 빠른 매칭</button>
            <button className="mpOutlineBtn">＋ 방 만들기</button>
            <button className="mpBackBtn" onClick={() => navigate("/")}>← 홈으로</button>
          </section>

          <section className="mpPanel">
            <div className="mpPanelTitle">게임 가이드</div>

            <div className="mpGuideRow">
              <div className="mpBadge mpB1">1</div>
              <div className="mpGuideText">출제자는 주어진 단어를 그림으로 표현합니다</div>
            </div>
            <div className="mpGuideRow">
              <div className="mpBadge mpB2">2</div>
              <div className="mpGuideText">다른 플레이어는 채팅으로 정답을 맞춥니다</div>
            </div>
            <div className="mpGuideRow">
              <div className="mpBadge mpB3">3</div>
              <div className="mpGuideText">빨리 맞출수록 높은 점수를 획득합니다</div>
            </div>
          </section>
        </aside>

        <section className="mpRightCol">
          <div className="mpPanel mpPanelBig">
            <div className="mpPanelTitle">게임 방 목록</div>
            <div className="mpPanelSub">참여하고 싶은 방을 선택하세요</div>

            <div className="mpTabs">
              {["전체", "공개방", "비공개방"].map((t) => (
                <button
                  key={t}
                  className={`mpTab ${tab === t ? "active" : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mpRoomList">
              {filtered.map((r, i) => (
                <div key={i} className="mpRoomItem">
                  <div className="mpRoomLeft">
                    <div className="mpRoomTitle">
                      {r.title}
                      <span className={`mpPill ${r.type === "공개" ? "pub" : "pri"}`}>{r.type}</span>
                    </div>
                    <div className="mpRoomMeta">
                      <span>👥 {r.players}</span>
                      <span>🕒 {r.time}</span>
                      <span>호스트: {r.host}</span>
                    </div>
                  </div>

                  <button className="mpEnterBtn">입장</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <button className="mpHelpBtn">?</button>
    </div>
  );
}
