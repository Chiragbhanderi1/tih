class Course {
    constructor(id, title, subtitle,price, details,duration,benifits,img ) {
            this.id = id;
            this.title = title;
            this.subtitle = subtitle;
            this.price = price;
            this.details = details;
            this.duration = duration;
            this.benifits = benifits;
            this.img = img;
    }
}

module.exports = Course;