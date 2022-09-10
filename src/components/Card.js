import React from "react";

export default function Card({ user }) {
  return (
    <>
      <div className="card-container  bg-background border border-bordercolor rounded-[5px] py-3 p-t-[30px] w-[350px] text-center">
        <img
          className="border-2 border-bordercolor rounded-[50%] mx-auto w-[250px]"
          src={user.image}
          alt="user"
        />
        <p className="text-[24px] font-medium text-primary">{user.name}</p>
        <p className="text-[20px] font-light text-primary-1">{user.username}</p>
        <div className="px-5 pt-3 mt-5 border-t-[1px] border-bordercolor relative text-primary max-w-full text-left">
          <table className="table-auto w-full">
            <tbody>
              <tr className="border-b-[1px] border-bordercolor">
                <td className="py-2 text-secondary font-medium">Repo No.</td>
                <td className="py-2 text-primary font-medium">{user.public_repo}</td>
              </tr>
              <tr className="border-b-[1px] border-bordercolor">
                <td className="py-2 text-secondary font-medium">Gists No.</td>
                <td className="py-2 text-primary font-medium">
                  {user.public_gists}
                </td>
              </tr>
              <tr>
                <td className="pt-2 text-secondary font-medium">Joined</td>
                <td className="pt-2 text-primary font-medium">{user.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
