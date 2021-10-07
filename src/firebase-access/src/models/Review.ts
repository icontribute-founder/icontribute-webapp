export default interface Review {
    reviewID: string;
    feedbackQuestion: string;
    userResponse: string;
    studentEmail: string;
    timestamp: Date;
}

// export default class Review {
//     reviewID: string;
//     feedbackQuestion: string;
//     userResponse: string;
//     studentEmail: string;
//     timestamp: Date;

//     constructor(
//         reviewID: string,
//         feedbackQuestion: string,
//         userResponse: string,
//         studentEmail: string
//     ) {
//         this.reviewID = reviewID || "";
//         this.feedbackQuestion = feedbackQuestion;
//         this.userResponse = userResponse;
//         this.studentEmail = studentEmail;
//         this.timestamp = new Date();
//     }
// }
