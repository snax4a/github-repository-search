import ArrowLink from "@/components/ui/links/ArrowLink";

interface BannerProps {
  title: string;
}

interface BannerWithoutActionProps extends BannerProps {
  actionText?: never;
  actionHref?: never;
}

interface BannerWithActionProps extends BannerProps {
  actionText: string;
  actionHref: string;
}

type AnnouncementBannerProps = BannerWithActionProps | BannerWithoutActionProps;

export default function AnnouncementBanner(props: AnnouncementBannerProps) {
  const { title, actionText, actionHref } = props;

  return (
    <section role="banner" className="flex justify-center">
      <div className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300">
        {title}
        {actionText && <ArrowLink href={actionHref}>{actionText}</ArrowLink>}
      </div>
    </section>
  );
}
