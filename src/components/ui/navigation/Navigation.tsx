"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Text } from "../typography/Typography";
import { Colors } from "@/styles/colors";

export function Navigation({
  header_navigation_data,
}: {
  header_navigation_data: { id: string; href: string; linkName: string }[];
}) {
  const currentPath = usePathname();
  return (
    <>
      {header_navigation_data.map(
        ({
          id,
          href,
          linkName,
        }: {
          id: string;
          href: string;
          linkName: string;
        }) => (
          <Link key={id} href={href} passHref legacyBehavior>
            <Text.BodyText
              sx={{
                color:
                  currentPath === href ? Colors.Accent : Colors.PrimaryMain,
                cursor: "pointer",
                fontWeight: currentPath === href ? "bold" : "bold",
                fontSize: { xs: "18px", sm: "12px" },
                border: {
                  xs: `1px solid ${Colors.SecondaryGrey}`,
                  sm: "unset",
                },
                textAlign: { xs: "center", sm: "unset" },
                marginBottom: { xs: 2, sm: "unset" },
                paddingY: { xs: 2, sm: "unset" },
                borderRadius: { xs: "3px", sm: "unset" },
              }}
            >
              {linkName}
            </Text.BodyText>
          </Link>
        )
      )}
    </>
  );
}
