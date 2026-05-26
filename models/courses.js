const fs = require('fs').promises;
const path = require('path');

class Courses {
    async find(criteria = () =>true) {
        const coursePath = path.join(__dirname, 'course.json');
        const courseData = await fs.readFile(coursesPath);
        const courses = JSON.parse(courseData);
        return courses.filter(criteria);
    }
}
module.exports = new Courses();
