const courseModel = require("..models/courses");
const genedModel = require("../models/gened");

class CourseServices {
  async getCoursesBySubject(subject) {
    return await coursesModel.find(course =>
      course.code.startsWith(subject)
    );
  }

  async getCoursesByGenEdCategory(category) {
    const offeredCourses = await coursesModel.find();
    const offeredCourseCodes = new Set(
      offeredCourses.map(course => course.code)
    );

    return await genedModel.find(genedCourse =>
      genedCourse.category === category &&
      offeredCourseCodes.has(genedCourse.code)
    );
  }
}

module.exports = new CourseServices();
          
