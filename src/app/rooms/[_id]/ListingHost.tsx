import { Avatar, Badge, Box, Button, Divider, Typography } from "@mui/joy"
import { MdVerifiedUser } from "react-icons/md";
import { IconContext } from "react-icons";
import { PiMedalFill } from "react-icons/pi";
import { NumericFormat } from "react-number-format";
import { CiWarning } from "react-icons/ci";

export function ListingHost() {
    return (
        <div className="w-[1120px] rounded-xl bg-[#F0EFE9] px-12 pt-10 pb-6 flex gap-[64px]">
            <div className="w-5/12 flex flex-col gap-8">
                <div className="p-6 rounded-xl border-[1px] border-[#DDDDDD] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] flex gap-6 bg-white flex gap-8">
                    <div className="w-1/2 flex flex-col gap-2 items-center">
                        <div className="flex flex-col justify-center">
                            <Box>
                                {host.status === "verified" && (
                                    <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} size="lg" color="danger" badgeInset="14%" badgeContent={
                                        <IconContext.Provider value={{ color: "white" }}>
                                            <div>
                                                <MdVerifiedUser />
                                            </div>
                                        </IconContext.Provider>}>
                                        <Avatar sx={{ "--Avatar-size": "104px" }} alt="Remy Sharp" src={host.avatar} />
                                    </Badge>
                                )}

                                {host.status === "" && (
                                    <Avatar sx={{ "--Avatar-size": "104px" }} alt="Remy Sharp" src={host.avatar} />
                                )}
                            </Box>
                        </div>

                        <div className="flex flex-col items-center">
                            <Typography level="h2">{host.name}</Typography>
                            {host.tag === "Superhost" && (
                                <div className="flex items-center gap-2">
                                    <PiMedalFill />
                                    <Typography>{host.tag}</Typography>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-1/2">
                        <div>
                            <NumericFormat
                                value={reviews.count}
                                allowLeadingZeros
                                thousandSeparator=","
                                className="bg-transparent text-lg font-semibold"
                                disabled
                            />
                            <Typography level="body-xs">Reviews</Typography>
                        </div>

                        <Divider />
                        <div>
                            <NumericFormat
                                value={reviews.reviewAverage}
                                allowLeadingZeros
                                className="bg-transparent text-lg font-semibold"
                                disabled
                            />
                            <Typography level="body-xs">Rating</Typography>
                        </div>

                        <Divider />
                        <div>
                            <NumericFormat
                                value={9}
                                className="bg-transparent text-lg font-semibold"
                                disabled
                            />
                            <Typography level="body-xs">Years hosting</Typography>
                        </div>

                    </div>
                </div>
                {/* <div>
                    two details
                </div> */}
                <Box>
                    <Typography>{host.describtion}</Typography>
                </Box>
            </div>

            <div className="w-7/12 flex flex-col gap-8">
                {host.tag === "Superhost" && (
                    <div className="flex flex-col gap-4">
                        <Typography level="h3">
                            {host.name} is a {host.tag}
                        </Typography>
                        <Typography>
                            Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                        </Typography>
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    <Typography level="h3">
                        Host details
                    </Typography>
                    <div>
                        <div className="flex gap-2">
                            <Typography>Response rate:</Typography>
                            <NumericFormat
                                value={host.hostDetail.responseRate}
                                suffix="%"
                                disabled
                            />
                        </div>
                        {host.hostDetail.responseTime < 60 && (
                            <Typography>Responds within an hour</Typography>
                        )}
                    </div>
                </div>
                <Button>Message Host</Button>
                <Divider />
                <div className="flex gap-2 items-center">
                    <CiWarning size={40} />
                    <Typography level="body-xs">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</Typography>
                </div>
            </div>
        </div>
    )
}

const host = {
    name: "Bayarmaa",
    status: "verified",
    avatar: "https://source.unsplash.com/ZHvM3XIOHoE",
    startedAt: "2024-04-24T07:34:35.493+00:00",
    tag: "Superhost",
    myWork: "Mongolia",
    mySchool: "World Vision",
    describtion: "I work and live in Ulaanbaatar. I'm listing my uncle Ochir's place on Airbnb to help him connect to the tourists directly and support his family. I hope it will be a memorable experience to interact with the family and witness the nomadic lifestyle.",
    hostDetail: {
        responseRate: 100,
        responseTime: 35
    }
}

const reviews = {
    count: 13,
    reviewAverage: 5
}