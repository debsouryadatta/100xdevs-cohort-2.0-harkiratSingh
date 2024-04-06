import { atom, selector } from "recoil";


export const networkAtom = atom({
    key: "networkAtom",
    default:0
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
})

export const messagesAtom = atom({
    key: "messagesAtom",
    default: 30
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 40
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagesAtomCount = get(messagesAtom);
        const notificationsAtomCount = get(notificationsAtom);

        return networkAtomCount + jobsAtomCount + messagesAtomCount + notificationsAtomCount;
    }
})