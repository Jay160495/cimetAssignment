import { makeStyles } from "@mui/styles";

const Style = makeStyles(() => ({
    main: {
        padding: 20,
    },
    boxData: {
        border: "1px solid #ccc",
        paddingTop: "10px",
        marginBottom: "25px !important",
        borderRadius: '5px',
        "& span": {
            background: "#c4e1ed",
            padding: '3px 15px',
            position: 'relative',
            bottom: 20,
            left: 15
        },
    },
    details: {
        textAlign: "center",
        "& img": {
            width: "24%"
        },
        "& p": {
            fontSize: "12px",
        }
    },
    color: {
        "& p": {
            color: "#7d7ddb",
            cursor: "pointer"
        }
    },
    detailsData: {
        background: "#efe4e4 !important",
        padding: "5px",
        margin: "0px 90px !important"
    },
    detailsRight: {
        background: "#c4e1ed",
        margin: "0px 97px !important"
    },
    onlineData: {
        margin: "0px 102px !important",
        borderRadius: "10px"
    },
    textData: {
        background: "#4d4d95",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        padding: "10px",
        display: 'flex',
        "& p": {
            fontSize: "12px",
            color: "#fff"
        }
    },
    amount: {
        background: "#b8dbe9",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        padding: "10px"
    },
    annuallyBill: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "7px",
        "& :first-child": {
            margin: "0px",
            fontWeight: "600",
            fontSize: "20px",
            color: '#444483'
        },
        "& :nth-child(2)": {
            margin: "0px",
            paddingTop: "5px",
            opacity: "0.5"
        }
    },
    monthlyBill: {
        display: "flex",
        flexDirection: "row",
        "& :first-child": {
            margin: "0px",
            color: "#5da4c1",
            
        },
        "& :nth-child(2)": {
            margin: "0px",
            opacity: "0.5"
        }
    },
    content: {
        marginBottom: "17px !important",
        marginTop: '7px !important',
        "& p": {
            fontSize: "12px",
            lineHeight: "21px",
            margin: "0px 20px 0px 20px",
        }
    },
    offPeriod: {
        background: "#efe4e4",
        padding: 10,
        "& p": {
            fontSize: "14px",
        },
        "& :nth-child(2)": {
            textAlign: "end"
        }
    },
    onlineToday: {
        borderRadius: "30px !important",
        backgroundColor: "#111187 !important",
        color: "#fff !important",
        textTransform: "capitalize !important",
        padding: '5px 10px !important'
    },
    title: {
        background: "#2f2f62",
        color: "#fff",
        fontSize: "12px !important",
        padding: "5px",
        fontWeight: "500 !important",
        textAlign: 'center',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        "& p": {
            fontSize: '12px' 
        }
    },
    titleRight: {
        justifyContent: "right",
        "& p": {
            fontSize: "12px !important",
            fontWeight: "800 !important",
            padding: "7px 10px 0px 0px"
        }
    },
    iconFilter: {
        backgroundColor: "#2f2f62 !important",
        color: "#fff !important",
        fontSize: "12px",
        fontWeight: "500 !important",
        padding: "5px",
        textAlign: 'center',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center'
    },
    heading: {
        display: 'flex',
        "& p": {
            fontSize: "12px !important",
        }
    },
    mainItem: {
        marginBottom: "10px !important"
    },
    elctricityInfo: {
        fontSize:'12px !important',
        marginLeft: '5px !important',
        padding:'2px !important', 
        borderRadius:'20px',
        color:'#000', 
        background:'#fff'
    },
    locationIcon: {
        width: 20, 
        position:'relative', 
        top:'5px'
    },
    filterIcon: {
        width: 20, 
        position:'relative', 
        top:'1px'
    },
    headingInfo: {
        width: 20
    },
    doneIcon: {
        width: 20, 
        position:'relative', 
        top:11, 
        left:5
    },
    infoIcon: {
        background: '#fff !important' , 
        borderRadius: '15px',
        marginLeft: '8px', 
        position:'relative',
        bottom:'2px'
    }
  }));
  export default Style;