import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message?: string;
  data: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const { path } = req.body;
    await res.revalidate(path);
    return res.json({ success: true, message: "Revalidate success", data: {} });
  } catch (error) {
    console.log(req.body, "error", error);
    return res.status(500).send({
      success: false,
      message: "Error revalidating",
      data: {},
    });
  }
}
