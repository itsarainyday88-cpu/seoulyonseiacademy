import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '서울연세학원 | Seoul Yonsei Academy',
    description: '서울대와 연세대의 교육 철학이 만나는 곳, 프리미엄 영수 전문 서울연세학원입니다.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
