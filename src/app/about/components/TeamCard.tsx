import HoverImage from "@/app/components/HoverImage";
import { TeamMemberDataType } from "@/data/types";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type TeamCardProps = {
  member: TeamMemberDataType;
};

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Link
      key={member.name}
      href={member.href}
      className={twMerge(
        "odd:px-[7vw] even:px-[7vw] lg:odd:pl-[7vw] lg:odd:pr-[calc(7vw_/_2)] lg:even:pr-[7vw] lg:even:pl-[calc(7vw_/_2_+_1rem)] h-auto flex-wrap lg:flex-nowrap lg:h-[18.75rem] w-full lg:w-6/12 flex justify-between animation-easein-slow",
        member.color
      )}
    >
      <div className="pt-14">
        <h4 className="text-3xl font-normal">{member.name}</h4>
        <h5 className="text-lg mb-1.5">{member.position}</h5>
      </div>
      <HoverImage
        img1={member.image1}
        img2={member.image2}
        width={300}
        height={300}
        className="max-w-full max-h-full self-end align-middle w-full lg:w-auto"
      />
    </Link>
  );
};

export default TeamCard;
