function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }
}

type InputValue = string | number | boolean;
type FormattedResult = string | number;

function processInput(value: InputValue): FormattedResult {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (value === true) {
        return "Active";
    }
    return "Inactive";
}

function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const latitude: number = coordinate[0];
    const longitude: number = coordinate[1];
    const locationName: string = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const currentArray of arrays) {
        for (const item of currentArray) {
            result.push(item);
        }
    }
    return result;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const popularCourses: Course[] = [];
    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            popularCourses.push({
                title: course.title,
                students: course.students,
                isPublished: course.isPublished,
            });
        }
    }
    return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const values: T[K][] = [];
    for (const item of items) {
        values.push(item[key]);
    }
    return values;
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

function validateAgeAsync(age: number): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void, reject: (reason?: unknown) => void) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}