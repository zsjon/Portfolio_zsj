import vigilante from "../assets/image/projects/vigilante.png";
import playus from "../assets/image/projects/PlayUs.png";
import fourka from "../assets/image/projects/Fourka.png";
import kicksco from "../assets/image/projects/kicksco.png";
import replaceImg from "../assets/image/projects/replace.png";

export const projects = [
    {
        id: 1,
        title: "Retriever",
        description:
            "온라인 마약거래 수사 보조 탐지 플랫폼입니다. " +
            "Node.js를 사용했으며, MongoDB와 Neo4j를 데이터베이스로 활용하여 온라인 상에서 " +
            "불법적으로 거래하는 텔레그램 채널과 홍보 게시글 간 유사성을 파악했습니다.",
        image: vigilante,
        // live: "http://metaverse.gachon.ac.kr/",
        source: "https://github.com/Gachon-Vigilante/Retriever_Frontend",
        notice: "*현재 Gachon Cloud 기간 만료로 인해 운영하지 않습니다.",
    },
    {
        id: 2,
        title: "PlayUs",
        description:
            "KBO 직관 커뮤니티 서비스입니다. " +
            "Node.js 기반의 모바일 베이스 반응형 웹이며, " +
            "실시간 경기 현황과 함께 팀별 커뮤니티, 경기 시뮬레이션을 제공합니다.",
        image: playus,
        // live: "https://web.playus.o-r.kr/",
        source: "https://github.com/KEA-ChunSam/PlayUs-FE",
        notice: "*현재 Kakao Cloud 기간 만료로 인해 운영되지 않습니다.",
    },
    {
        id: 3,
        title: "Fourka",
        description:
            "사내규정 알리미 챗봇 & 관리 플랫폼입니다. " +
            "Next.js와 Bulma CSS를 사용하였으며, 실시간 알림 서비스를 위해 WebSocket을 적용했습니다.",
        image: fourka,
        live: "https://msj9965.com/admin/login",
        // source: "https://github.com/yourname/ecommerce",
        notice: "*현재 Kakao Cloud 기간 만료로 인해 운영되지 않습니다.",
    },
    {
        id: 4,
        title: "C.L.U.E",
        description:
            "공원 내 AI CCTV를 활용한 유실 따릉이를 감지하고, 공원의 구역별 혼잡도를 " +
            "관리할 수 있는 웹 대시보드입니다. Node.js와 MUI를 사용하여 개발했습니다.",
        image: replaceImg,
        live: "https://zsjon.github.io/ddarreung/",
        source: "https://github.com/yourname/ecommerce",
        notice: "*현재 해커톤 종료로 인해 운영되지 않습니다.",
    },
    {
        id: 5,
        title: "Kicksco",
        description:
            "주요 거점 별 PM(Personal Mobility) 주차 상태와 주요 보행경로를 파악" +
            "하여, 부적절한 PM 주차 위치 대한 파악 및 관리, 즉각적 조치를 가능케 하는 실시간 모니터링 시스템입니다.",
        image: kicksco,
        live: "https://zsjon.github.io/kicksco_embedded_app/#/admin",
        source: "https://github.com/ISSRLab/CISCO_INNOVATION_CHALLENGE/tree/embedded_app_client",
        notice: "*Webex app에서 작동하며, 미배포로 현재 사용 불가능합니다.",
    },
];