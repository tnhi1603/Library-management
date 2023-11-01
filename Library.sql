CREATE DATABASE Library;
/*DROP DATABASE Library;*/
USE Library;

/*BẢNG SÁCH*/
CREATE TABLE Books
(
BookID INT NOT NULL AUTO_INCREMENT,
Title NVARCHAR(255) NOT NULL,
Author NVARCHAR(255) NOT NULL,
Genre NVARCHAR(255) NOT NULL,
Publisher NVARCHAR(255) NOT NULL,
PublicationYear INT NOT NULL,
Status NVARCHAR(255) NOT NULL, /*HAVING, BORROWED, LOST*/
Description TEXT,
PRIMARY KEY (BookID)
);
/*DROP TABLE Books;*/
/*Đặt điều kiện PublicationYear < năm nay*/
alter table Books
add constraint check_pubyear check(PublicationYear < 2023);

/*Đặt điều kiện cho status*/
alter table Books
add constraint check_status check( status in ('HAVING', 'BORROWED', 'LOST'));

/*Điều kiện để ID không bị trùng*/
alter table Books
add constraint unique_bookID UNIQUE (BookID);

/*Bảng Users*/
CREATE TABLE Users (
UserID INT NOT NULL AUTO_INCREMENT,
Username VARCHAR(255) NOT NULL, /*Ex: ABC*/
Password VARCHAR(255) NOT NULL,
FullName NVARCHAR(255) NOT NULL,
Email VARCHAR(255) NOT NULL,
Role VARCHAR(255) NOT NULL, /*QL: Quản lý, TT: Thông thường*/
PRIMARY KEY (UserID)
);
/*DROP TABLE Users*/

/*Kiếm tra vai trò*/
alter table Users
add constraint check_Role check( Role in ('QL', 'TT'));

alter table Users
add constraint unique_userID UNIQUE (UserID);

/*Bảng mượn*/
CREATE TABLE Borrowings (
  BorrowingID INT not null AUTO_INCREMENT,
  UserID INT not nulL,
  BookID INT not nulL,
  BorrowDate DATE NOT NULL,
  DueDate DATE NOT NULL,
  ReturnDate DATE,
  PRIMARY KEY (BorrowingID)
);
/*DROP TABLE Borrowings*/

 /*Tạo 2 khóa ngoại cho bảng Borrowings*/
alter table Borrowings
add constraint k1_UserID foreign key (UserID) references Users(UserID);
alter table Borrowings
add constraint k2_BookID foreign key (BookID) references Books(BookID);
/*Kiểm tra ReturnDate và DueDate > BorrowingDate*/
alter table borrowings
add constraint k3_checkRDate check (ReturnDate > BorrowDate);
alter table borrowings
add constraint k4_checkDDate check (DueDate > BorrowDate);
/*Insert table books*/
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (01, N'Dế Mèn phiêu lưu ký', N'Tô Hoài', N'Truyện thiếu nhi', N'Báo Tân Dân', 1941, 'HAVING', N'Dế Mèn phiêu lưu ký là tác phẩm văn xuôi đặc sắc và nổi tiếng nhất của nhà văn Tô Hoài viết về loài vật, dành cho lứa tuổi thiếu nhi.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (02, N'Tuổi thơ dữ dội', N'Phùng Quán', N'Tiểu thuyết', N'Kim Đồng', 1988, 'HAVING', N'Tuổi thơ dữ dội là một tiểu thuyết dài tám phần xuất bản năm 1988 của nhà văn Phùng Quán, có nội dung xoay quanh cuộc sống chiến đấu và sự hy sinh của những thiếu niên 13, 14 tuổi trong hàng ngũ Đội thiếu niên trinh sát của trung đoàn Trần Cao Vân.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (03, N'Kính Vạn Hoa', N'Nguyễn Nhật Ánh', N'Truyện thiếu nhi', N'Kim Đồng', 1995, 'HAVING', N'Kính vạn hoa là một bộ truyện dài nhiều tập của nhà văn Nguyễn Nhật Ánh kể về những chuyện vui buồn trong giới học trò.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (04, N'Tắt đèn', N'Ngô Tất Tố', N'Tiểu thuyết', N'Báo Việt Nữ', 1937, 'HAVING', N'Tắt đèn là một tác phẩm văn học hiện thực phê phán với nội dung nói về cuộc sống khốn khổ của tầng lớp nông dân Việt Nam đầu thế kỉ XX dưới ách đô hộ của thực dân Pháp.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (05, N'Mắt biếc', N'Nguyễn Nhật Ánh', N'Truyện dài', N'Trẻ', 1990, 'HAVING', N'Mắt biếc viết về tình yêu thanh thiếu niên của tác giả này cùng với Thằng quỷ nhỏ.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (06, N'A study in Scarlett', N'Arthur Conan Doyle', N'Trinh thám', N'Wardlock and Co', 1887, 'HAVING',N'Là câu chuyện đầu tiên xuất hiện nhân vật Sherlock Holmes và John H. Watson.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (07, N'Tôi thấy hoa vàng trên cỏ xanh', N'Nguyễn Nhật Ánh', N'Tiểu thuyết', N'Trẻ', 2010, 'HAVING',N'Tác phẩm như một tập nhật ký xoay quanh cuộc sống của những đứa trẻ ở một vùng quê Việt Nam nghèo khó.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (08, N'Cánh đồng bất tận', N'Nguyễn Ngọc Tư', N'Truyện ngắn', N'Trẻ', 2005, 'HAVING',N'Cánh đồng bất tận là tên một tập truyện ngắn phát hành năm 2005 của Nguyễn Ngọc Tư, đồng thời cũng là tên một truyện trong tập truyện ngắn đó được đăng báo lần đầu cùng năm.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (09, N'Đắc nhân tâm', N'Dale Carnegie', N'Sách tự lực', N'Simon and Schuster', 1936, 'HAVING',N'Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống.');
insert into Books(BookID, Title, Author, Genre, Publisher, PublicationYear, Status, Description) values 
            (10, N'Chúa tể những chiếc nhẫn', N'Tolkien', N'Tiểu thuyết', N'Allen&Unwin', 1955, 'HAVING',N'The Lord of the Rings thực sự là tập hợp quy mô những hiểu biết về một thế giới tưởng tượng có tên là Middle Earth (hay vùng Trung Địa) với nhiều giống loài khác nhau.');
Select * from Books;



