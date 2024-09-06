import Link from 'next/link';
import {
  Bell,
  Truck,
  Gift,
  Ticket,
  Megaphone,
  FileSpreadsheet,
  ChevronRight,
} from 'lucide-react';

function ServiceItem({ text, link }: { text: string; link: string }) {
  let Icon;

  switch (text) {
    case '주문내역':
      Icon = FileSpreadsheet;
      break;
    case '선물함':
      Icon = Gift;
      break;
    case '쿠폰':
      Icon = Ticket;
      break;
    case '배송지 관리':
      Icon = Truck;
      break;
    case '입고 알림 내역':
      Icon = Bell;
      break;
    case '배송지 정보 수집 및 이용 동의':
      Icon = Megaphone;
      break;
    default:
      Icon = null;
  }

  return (
    <Link
      className="w-full flex justify-between items-center py-2"
      href={`mypage/${link}`}
    >
      <li className="flex items-center gap-x-2">
        {Icon && <Icon size={30} color="gray" />}
        <span className="font-semibold">{text}</span>
      </li>
      <ChevronRight />
    </Link>
  );
}

export default ServiceItem;
