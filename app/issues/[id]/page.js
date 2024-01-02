import IssueStatusBadge from "@/app/Components/IssueStatusBadge";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";

const IssueDetailComponent = async ({ params }) => {
  const fetchIssue = async () => {
    const issue = await fetch(`http://localhost:3001/issue/${params.id}`);
    const data = await issue.json();
    if (!data.success) {
      return notFound();
    } else {
      return data;
    }
  };
  const issue = await fetchIssue();
  return (
    <Grid className="px-4" columns={{ initial: "1", md: "2" }} gap="5">
      <Box className=" max-w-3xl">
        <IssueDetail issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.data._id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailComponent;
